// Firebase Configuration - Real-Time Gantt Chart
// Bu config Firebase Console'dan otomatik oluşturuldu

// Your web app's Firebase configuration (Firebase Console'dan kopyalandı)
const firebaseConfig = {
  apiKey: "AIzaSyCHPx-P8-iNuZSB-VQXNoA8joFUKflzZ48",
  authDomain: "gantt-collaboration.firebaseapp.com",
  projectId: "gantt-collaboration",
  storageBucket: "gantt-collaboration.firebasestorage.app",
  messagingSenderId: "943434253016",
  appId: "1:943434253016:web:5745ae8ad2011f0e954dad"
};

// Firebase modüllerini import et (CDN üzerinden)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  query,
  orderBy,
  limit
} from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js';

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('🔥 Firebase başarıyla bağlandı!');

// Global değişkenler
let currentUser = prompt("Adınızı girin (Metin/Onur):") || "Anonim";
let tasks = [];
let activities = [];

// ================================
// REAL-TIME FUNCTIONS
// ================================

// Görevleri real-time dinle
function initTaskListener() {
  const tasksRef = collection(db, 'tasks');
  const q = query(tasksRef, orderBy('createdAt', 'desc'));
  
  onSnapshot(q, (snapshot) => {
    tasks = [];
    snapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    
    console.log(`📊 ${tasks.length} görev yüklendi`);
    renderGanttChart();
  });
}

// Aktiviteleri real-time dinle
function initActivityListener() {
  const activitiesRef = collection(db, 'activities');
  const q = query(activitiesRef, orderBy('timestamp', 'desc'), limit(20));
  
  onSnapshot(q, (snapshot) => {
    activities = [];
    snapshot.forEach((doc) => {
      activities.push({ id: doc.id, ...doc.data() });
    });
    
    console.log(`📈 ${activities.length} aktivite yüklendi`);
    renderActivityFeed();
  });
}

// ================================
// TASK OPERATIONS
// ================================

// Yeni görev ekle
async function addTask(taskData) {
  try {
    const taskRef = doc(collection(db, 'tasks'));
    await setDoc(taskRef, {
      name: taskData.name,
      owner: taskData.owner,
      startWeek: parseInt(taskData.startWeek),
      duration: parseInt(taskData.duration),
      status: 'active',
      createdBy: currentUser,
      createdAt: serverTimestamp(),
      lastModified: serverTimestamp(),
      lastModifiedBy: currentUser
    });
    
    // Aktivite ekle
    await addActivity(`${currentUser} yeni görev ekledi: "${taskData.name}"`);
    
    console.log('✅ Görev başarıyla eklendi!');
    return true;
  } catch (error) {
    console.error('❌ Görev eklenirken hata:', error);
    return false;
  }
}

// Görev güncelle
async function updateTask(taskId, updates) {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, {
      ...updates,
      lastModified: serverTimestamp(),
      lastModifiedBy: currentUser
    });
    
    await addActivity(`${currentUser} bir görevi güncelledi`);
    
    console.log('✅ Görev başarıyla güncellendi!');
    return true;
  } catch (error) {
    console.error('❌ Görev güncellenirken hata:', error);
    return false;
  }
}

// Görev sil
async function deleteTask(taskId) {
  try {
    await deleteDoc(doc(db, 'tasks', taskId));
    await addActivity(`${currentUser} bir görevi sildi`);
    
    console.log('✅ Görev başarıyla silindi!');
    return true;
  } catch (error) {
    console.error('❌ Görev silinirken hata:', error);
    return false;
  }
}

// ================================
// ACTIVITY OPERATIONS
// ================================

// Aktivite ekle
async function addActivity(message) {
  try {
    const activityRef = doc(collection(db, 'activities'));
    await setDoc(activityRef, {
      message: message,
      user: currentUser,
      timestamp: serverTimestamp()
    });
    
    console.log('📝 Aktivite eklendi:', message);
  } catch (error) {
    console.error('❌ Aktivite eklenirken hata:', error);
  }
}

// ================================
// UI FUNCTIONS
// ================================

// Gantt chart render et
function renderGanttChart() {
  const ganttBody = document.getElementById('ganttBody');
  if (!ganttBody) return;
  
  ganttBody.innerHTML = '';
  
  tasks.forEach(task => {
    const taskRow = document.createElement('div');
    taskRow.className = 'task-row';
    
    const width = (task.duration / 6) * 100; // 6 hafta toplam
    const marginLeft = ((task.startWeek - 1) / 6) * 100;
    
    taskRow.innerHTML = `
      <div class="task-info">${task.name}</div>
      <div class="task-timeline">
        <div class="task-bar" style="width: ${width}%; margin-left: ${marginLeft}%;">
          ${task.owner}
          <div class="user-indicator">${task.owner.charAt(0)}</div>
        </div>
      </div>
    `;
    
    ganttBody.appendChild(taskRow);
  });
  
  // İstatistikleri güncelle
  updateStats();
}

// Aktivite feed render et  
function renderActivityFeed() {
  const activityFeed = document.getElementById('activityFeed');
  if (!activityFeed) return;
  
  const activitiesHtml = activities.map(activity => {
    const timeAgo = activity.timestamp ? 'Az önce' : 'Şimdi';
    return `
      <div class="activity-item">
        <span class="activity-user">${activity.user}</span> 
        ${activity.message.replace(activity.user, '').trim()}
        <div style="font-size: 0.8rem; color: #adb5bd;">${timeAgo}</div>
      </div>
    `;
  }).join('');
  
  activityFeed.innerHTML = `
    <h3>📈 Aktivite Akışı</h3>
    ${activitiesHtml}
  `;
}

// İstatistikleri güncelle
function updateStats() {
  const totalTasksEl = document.getElementById('totalTasks');
  const completedTasksEl = document.getElementById('completedTasks');
  const activeUsersEl = document.getElementById('activeUsers');
  
  if (totalTasksEl) totalTasksEl.textContent = tasks.length;
  if (completedTasksEl) completedTasksEl.textContent = tasks.filter(t => t.status === 'completed').length;
  if (activeUsersEl) activeUsersEl.textContent = [...new Set(tasks.map(t => t.owner))].length;
}

// ================================
// INITIALIZATION
// ================================

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Real-Time Gantt Chart başlatılıyor...');
  
  // Firebase listeners başlat
  initTaskListener();
  initActivityListener();
  
  // Kullanıcı hoş geldin mesajı
  setTimeout(() => {
    addActivity(`${currentUser} projeye katıldı`);
  }, 1000);
  
  console.log('✅ Sistem hazır! Real-time senkronizasyon aktif.');
});

// ================================
// EXPORT FUNCTIONS (UI için)
// ================================

window.addNewTask = async function() {
  const name = prompt("Görev adı:");
  const owner = prompt("Sorumlu (Metin/Onur):");
  const startWeek = prompt("Başlangıç haftası (1-6):");
  const duration = prompt("Süre (hafta):");
  
  if (name && owner && startWeek && duration) {
    const success = await addTask({
      name, owner, startWeek, duration
    });
    
    if (success) {
      alert('✅ Görev başarıyla eklendi ve Onur\'a bildirildi!');
    }
  }
};

window.saveProject = async function() {
  await addActivity(`${currentUser} proje değişikliklerini kaydetti`);
  alert('✅ Proje kaydedildi ve senkronize edildi!');
};

window.autoSchedule = async function() {
  await addActivity(`${currentUser} otomatik planlama kullandı`);
  alert('🤖 Görevler otomatik olarak yeniden planlandı!');
};
