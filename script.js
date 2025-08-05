// Project data based on İdari Yönetim Uygulaması
const projectData = [
    // Bölüm 1: Sistem Mimarı ve Kod Ortamları (3 hafta)
    {
        id: 1,
        name: "Sistem Planlama ve Kod Ortamı",
        description: "Turborepo monorepo yapısı, Node.js backend ve Next.js frontend skeletlerinin oluşturulması",
        startWeek: 1,
        endWeek: 1,
        phase: 1,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Temel kurulum: npm paketleri, git-github reposu, Turborepo ile monorepo yapısı. Node.js (TypeScript) backend ve Next.js frontend skeletlerinin oluşturulması."
    },
    {
        id: 2,
        name: "Kod Ortamı ve Sunucu Kurulumu",
        description: "CI/CD, Docker & Veritabanı kurulumu",
        startWeek: 2,
        endWeek: 2,
        phase: 1,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "GitHub Actions ile otomatik test ve dağıtım hatları. Docker konteynerlerinin yapılandırılması ve AWS ECR/ECS altyapısı. Neon PostgreSQL veritabanı bağlantısı."
    },
    {
        id: 3,
        name: "API Gateway & Kimlik Doğrulama",
        description: "Merkezi API Gateway yapısı ve JWT tabanlı kimlik doğrulama",
        startWeek: 3,
        endWeek: 3,
        phase: 1,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Merkezi API Gateway yapısı, JWT tabanlı kimlik doğrulama sistemi, kullanıcı kayıt/giriş API'ları ve temel middleware'lerin geliştirilmesi."
    },
    
    // Bölüm 2: Kullanıcı ve Çalışma Alanı Yönetimi (3 hafta)
    {
        id: 4,
        name: "Çalışma Alanı ve Ayarlar",
        description: "Workspace Yönetimi ve organizasyon ayarları",
        startWeek: 4,
        endWeek: 4,
        phase: 2,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Çoklu-kiracılı (multi-tenant) yapı, organizasyon ayarları, resmi tatiller, mesai kuralları için API uç noktalarının geliştirilmesi."
    },
    {
        id: 5,
        name: "Kullanıcı Yönetimi (Backend)",
        description: "Kullanıcı Yönetimi API'lerinin geliştirilmesi",
        startWeek: 5,
        endWeek: 5,
        phase: 2,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Kullanıcı davet sistemi, rol tabanlı erişim kontrolü (RBAC), kullanıcı durum yönetimi API'larının geliştirilmesi."
    },
    {
        id: 6,
        name: "Kullanıcı Yönetimi (Frontend)",
        description: "Kullanıcı Yönetimi Arayüzü",
        startWeek: 6,
        endWeek: 6,
        phase: 2,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Kullanıcı davet arayüzü, rol yönetimi paneli, kullanıcı listesi ve düzenleme sayfalarının geliştirilmesi, sistem entegrasyonu testleri."
    },
    
    // Bölüm 3: Personel Yönetimi Modülleri (4 hafta)
    {
        id: 7,
        name: "Personel Profilleri (A)",
        description: "Çalışan Profilleri ve belge yönetimi",
        startWeek: 7,
        endWeek: 7,
        phase: 3,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Personel bilgileri, belge yönetimi, self-servis güncelleme için API ve arayüzlerin geliştirilmesi."
    },
    {
        id: 8,
        name: "Mesai ve Puantaj Yönetimi (B)",
        description: "Puantaj Sistemi ve mesai hesaplamaları",
        startWeek: 8,
        endWeek: 8,
        phase: 3,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Giriş/çıkış kayıtları, mesai hesaplamaları, timesheet yönetimi için API ve arayüzlerin geliştirilmesi."
    },
    {
        id: 9,
        name: "İzin Yönetimi (C)",
        description: "İzin Süreçleri ve onay akışları",
        startWeek: 9,
        endWeek: 9,
        phase: 3,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "İzin talepleri, onay akışları, bakiye takibi ve şirket takvimi entegrasyonu için API ve arayüzlerin geliştirilmesi."
    },
    {
        id: 10,
        name: "Performans Yönetimi (D)",
        description: "Objektif performans değerlendirme sistemi",
        startWeek: 10,
        endWeek: 10,
        phase: 3,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Mesai uyumu ve görev tamamlama verilerini kullanan objektif performans değerlendirme sisteminin geliştirilmesi."
    },
    
    // Bölüm 4: İş Yönetimi ve Etkileşim (3 hafta)
    {
        id: 11,
        name: "İş ve Süreç Yönetimi - Frontend",
        description: "Görsel iş akışı panoları ve Kanban",
        startWeek: 11,
        endWeek: 11,
        phase: 4,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Görsel iş akışı panoları, sürükle-bırak işlevselliği, görev detay sayfalarının geliştirilmesi."
    },
    {
        id: 12,
        name: "İş ve Süreç Yönetimi - Backend",
        description: "Proje ve görev CRUD işlemleri",
        startWeek: 12,
        endWeek: 12,
        phase: 4,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Proje ve görev CRUD işlemleri, görev bağımlılıkları, durum yönetimi API'larının geliştirilmesi."
    },
    {
        id: 13,
        name: "İşbirliği Özellikleri",
        description: "Yorum sistemi, dosya eklentileri ve raporlama",
        startWeek: 13,
        endWeek: 13,
        phase: 4,
        status: "not-started",
        priority: "high",
        progress: 0,
        notes: "Yorum sistemi, dosya eklentileri ve raporlama altyapısının geliştirilmesi."
    },
    
    // Bölüm 5: Bildirim ve Analitik Sistemleri (2 hafta)
    {
        id: 14,
        name: "Bildirimler",
        description: "Real-time bildirim sistemi",
        startWeek: 14,
        endWeek: 14,
        phase: 5,
        status: "not-started",
        priority: "medium",
        progress: 0,
        notes: "Real-time WebSocket altyapısı, kritik olaylar (görev atama, izin onayı) için bildirim entegrasyonlarının geliştirilmesi."
    },
    {
        id: 15,
        name: "Dashboard ve Raporlama",
        description: "Ana Dashboard ve temel raporlama",
        startWeek: 15,
        endWeek: 15,
        phase: 5,
        status: "not-started",
        priority: "medium",
        progress: 0,
        notes: "Tüm modüllerden gelen verileri özetleyen gösterge paneli, temel raporlama arayüzleri ve sistem entegrasyonu testlerinin tamamlanması."
    }
];

// Phase names for Turkish display
const phaseNames = {
    1: "Sistem Mimarı",
    2: "Kullanıcı Yönetimi", 
    3: "Personel Yönetimi",
    4: "İş Yönetimi",
    5: "Bildirim & Analitik"
};

// Template tasks for quick creation
const taskTemplates = {
    "frontend": {
        name: "Frontend Geliştirme",
        description: "Kullanıcı arayüzü geliştirme",
        duration: 2,
        priority: "high",
        notes: "React/Next.js ile frontend geliştirme"
    },
    "backend": {
        name: "Backend API",
        description: "API endpoint geliştirme",
        duration: 2,
        priority: "high", 
        notes: "Node.js/Express ile API geliştirme"
    },
    "database": {
        name: "Veritabanı Tasarımı",
        description: "Veritabanı şeması ve optimizasyon",
        duration: 1,
        priority: "medium",
        notes: "PostgreSQL veritabanı tasarımı"
    },
    "testing": {
        name: "Test Yazımı",
        description: "Birim ve entegrasyon testleri",
        duration: 1,
        priority: "medium",
        notes: "Jest/Cypress ile test yazımı"
    },
    "deployment": {
        name: "Dağıtım",
        description: "Canlı ortama dağıtım",
        duration: 1,
        priority: "low",
        notes: "Docker/AWS ile dağıtım"
    }
};

// Project start date - July 1, 2025
const projectStartDate = new Date('2025-07-01');

// Global variables
let currentTasks = [...projectData];
let selectedTaskId = null;
let currentEditingTaskId = null;
let currentZoom = 1.0; // 1.0 = 100%
let weekWidth = 120; // Base week width in pixels

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeGanttChart();
    initializeEventListeners();
    updateProgressStats();
});

function initializeGanttChart() {
    generateTimelineHeader();
    generateGanttBody();
    updateCurrentWeek();
    applyZoom(); // Apply initial zoom
    addDropZones(); // Enable drag & drop
}

function generateTimelineHeader() {
    const timelineHeader = document.getElementById('timelineHeader');
    timelineHeader.innerHTML = '';
    
    for (let week = 1; week <= 15; week++) {
        const weekHeader = document.createElement('div');
        weekHeader.className = 'week-header';
        
        // Calculate week dates
        const weekStart = new Date(projectStartDate);
        weekStart.setDate(projectStartDate.getDate() + (week - 1) * 7);
        
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        
        weekHeader.innerHTML = `
            <div>Hafta ${week}</div>
            <div style="font-size: 0.7em; color: #666;">
                ${formatDate(weekStart)} - ${formatDate(weekEnd)}
            </div>
        `;
        
        timelineHeader.appendChild(weekHeader);
    }
}

function generateGanttBody() {
    const ganttBody = document.getElementById('ganttBody');
    ganttBody.innerHTML = '';
    
    currentTasks.forEach(task => {
        const taskRow = createTaskRow(task);
        ganttBody.appendChild(taskRow);
    });
}

function createTaskRow(task) {
    const taskRow = document.createElement('div');
    taskRow.className = 'task-row';
    taskRow.dataset.taskId = task.id;
    
    // Task info section
    const taskInfoCell = document.createElement('div');
    taskInfoCell.className = 'task-info-cell';
    
    const taskNameCell = document.createElement('div');
    taskNameCell.className = 'task-name-cell';
    taskNameCell.textContent = task.name;
    
    const taskDetails = document.createElement('div');
    taskDetails.className = 'task-details';
    
    const taskPhase = document.createElement('span');
    taskPhase.className = 'task-phase';
    taskPhase.textContent = `Bölüm ${task.phase}: ${phaseNames[task.phase]}`;
    
    const taskProgress = document.createElement('span');
    taskProgress.textContent = `${task.progress}%`;
    
    const taskPriority = document.createElement('span');
    taskPriority.textContent = `Öncelik: ${getPriorityText(task.priority)}`;
    
    taskDetails.appendChild(taskPhase);
    taskDetails.appendChild(taskProgress);
    taskDetails.appendChild(taskPriority);
    
    taskInfoCell.appendChild(taskNameCell);
    taskInfoCell.appendChild(taskDetails);
    
    // Timeline section
    const taskTimeline = document.createElement('div');
    taskTimeline.className = 'task-timeline';
    
    // Create week columns
    for (let week = 1; week <= 15; week++) {
        const weekColumn = document.createElement('div');
        weekColumn.className = 'week-column';
        weekColumn.style.width = `${weekWidth * currentZoom}px`;
        taskTimeline.appendChild(weekColumn);
    }
    
    // Set timeline width
    const totalTimelineWidth = 15 * weekWidth * currentZoom;
    taskTimeline.style.minWidth = `${totalTimelineWidth}px`;
    taskTimeline.style.width = `${totalTimelineWidth}px`;
    
    // Create task bar
    const taskBar = createTaskBar(task);
    taskTimeline.appendChild(taskBar);
    
    taskRow.appendChild(taskInfoCell);
    taskRow.appendChild(taskTimeline);
    
    // Event listeners
    taskRow.addEventListener('click', () => selectTask(task.id));
    taskRow.addEventListener('dblclick', () => editTask(task.id));
    
    return taskRow;
}

function createTaskBar(task) {
    const taskBar = document.createElement('div');
    taskBar.className = `task-bar ${task.status}`;
    taskBar.draggable = true;
    taskBar.dataset.taskId = task.id;
    
    const duration = task.endWeek - task.startWeek + 1;
    const currentWeekWidth = weekWidth * currentZoom;
    const startPosition = (task.startWeek - 1) * currentWeekWidth + 1; // +1px border adjustment
    const width = duration * currentWeekWidth - 2; // -2px for better visual spacing
    
    taskBar.style.left = `${startPosition}px`;
    taskBar.style.width = `${width}px`;
    taskBar.style.cursor = 'move';
    
    const taskBarContent = document.createElement('div');
    taskBarContent.className = 'task-bar-content';
    taskBarContent.textContent = task.name;
    taskBarContent.style.pointerEvents = 'none'; // Prevent interference with drag
    
    taskBar.appendChild(taskBarContent);
    
    // Progress indicator
    if (task.progress > 0) {
        const progressIndicator = document.createElement('div');
        progressIndicator.style.position = 'absolute';
        progressIndicator.style.left = '0';
        progressIndicator.style.top = '0';
        progressIndicator.style.height = '100%';
        progressIndicator.style.width = `${task.progress}%`;
        progressIndicator.style.background = 'rgba(255, 255, 255, 0.3)';
        progressIndicator.style.borderRadius = '12px';
        progressIndicator.style.pointerEvents = 'none';
        taskBar.appendChild(progressIndicator);
    }
    
    // Add resize handles
    const leftHandle = document.createElement('div');
    leftHandle.className = 'task-resize-handle left';
    leftHandle.style.cssText = `
        position: absolute;
        left: -3px;
        top: 0;
        width: 6px;
        height: 100%;
        background: rgba(0,0,0,0.3);
        cursor: w-resize;
        opacity: 0;
        transition: opacity 0.2s;
    `;
    
    const rightHandle = document.createElement('div');
    rightHandle.className = 'task-resize-handle right';
    rightHandle.style.cssText = `
        position: absolute;
        right: -3px;
        top: 0;
        width: 6px;
        height: 100%;
        background: rgba(0,0,0,0.3);
        cursor: e-resize;
        opacity: 0;
        transition: opacity 0.2s;
    `;
    
    taskBar.appendChild(leftHandle);
    taskBar.appendChild(rightHandle);
    
    // Show resize handles on hover
    taskBar.addEventListener('mouseenter', () => {
        leftHandle.style.opacity = '1';
        rightHandle.style.opacity = '1';
    });
    
    taskBar.addEventListener('mouseleave', () => {
        leftHandle.style.opacity = '0';
        rightHandle.style.opacity = '0';
    });
    
    // Add drag and drop event listeners
    addDragDropListeners(taskBar, task);
    addResizeListeners(leftHandle, rightHandle, task);
    
    return taskBar;
}

// Drag and Drop functionality
function addDragDropListeners(taskBar, task) {
    let isDragging = false;
    let dragStartX = 0;
    let originalStartWeek = 0;
    let ghostBar = null;
    
    taskBar.addEventListener('dragstart', (e) => {
        isDragging = true;
        dragStartX = e.clientX;
        originalStartWeek = task.startWeek;
        
        // Create ghost element
        ghostBar = taskBar.cloneNode(true);
        ghostBar.style.opacity = '0.5';
        ghostBar.style.zIndex = '1000';
        ghostBar.classList.add('dragging-ghost');
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', task.id);
        
        // Hide original while dragging
        setTimeout(() => {
            if (isDragging) taskBar.style.opacity = '0.3';
        }, 0);
    });
    
    taskBar.addEventListener('dragend', (e) => {
        isDragging = false;
        taskBar.style.opacity = '1';
        
        if (ghostBar) {
            ghostBar.remove();
            ghostBar = null;
        }
        
        // Remove drag indicators
        document.querySelectorAll('.drop-indicator').forEach(el => el.remove());
    });
}

// Add drop zones to timeline
function addDropZones() {
    const timelines = document.querySelectorAll('.task-timeline');
    
    timelines.forEach(timeline => {
        timeline.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            // Calculate drop position
            const rect = timeline.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const currentWeekWidth = weekWidth * currentZoom;
            const week = Math.floor(x / currentWeekWidth) + 1;
            
            // Show drop indicator
            showDropIndicator(timeline, week);
        });
        
        timeline.addEventListener('dragleave', (e) => {
            // Remove drop indicator if leaving timeline area
            const rect = timeline.getBoundingClientRect();
            if (e.clientX < rect.left || e.clientX > rect.right || 
                e.clientY < rect.top || e.clientY > rect.bottom) {
                removeDropIndicator(timeline);
            }
        });
        
        timeline.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskId = parseInt(e.dataTransfer.getData('text/plain'));
            const task = currentTasks.find(t => t.id === taskId);
            
            if (task) {
                const rect = timeline.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const currentWeekWidth = weekWidth * currentZoom;
                const newStartWeek = Math.max(1, Math.min(15, Math.floor(x / currentWeekWidth) + 1));
                const duration = task.endWeek - task.startWeek;
                
                // Update task position
                task.startWeek = newStartWeek;
                task.endWeek = Math.min(15, newStartWeek + duration);
                
                // Check for conflicts and auto-adjust if needed
                handleTaskConflicts(task);
                
                // Update UI
                generateGanttBody();
                addDropZones(); // Re-add drop zones after regenerating
                showMessage(`${task.name} hafta ${newStartWeek}'e taşındı`, 'success');
            }
            
            removeDropIndicator(timeline);
        });
    });
}

function showDropIndicator(timeline, week) {
    removeDropIndicator(timeline);
    
    const currentWeekWidth = weekWidth * currentZoom;
    const indicator = document.createElement('div');
    indicator.className = 'drop-indicator';
    indicator.style.cssText = `
        position: absolute;
        left: ${(week - 1) * currentWeekWidth}px;
        top: 0;
        width: 2px;
        height: 100%;
        background: #2196F3;
        z-index: 999;
        box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
    `;
    
    timeline.appendChild(indicator);
}

function removeDropIndicator(timeline) {
    const existing = timeline.querySelector('.drop-indicator');
    if (existing) existing.remove();
}

// Resize functionality
function addResizeListeners(leftHandle, rightHandle, task) {
    let isResizing = false;
    let resizeType = '';
    let startX = 0;
    let originalStartWeek = 0;
    let originalEndWeek = 0;
    
    [leftHandle, rightHandle].forEach(handle => {
        handle.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            isResizing = true;
            resizeType = handle.classList.contains('left') ? 'left' : 'right';
            startX = e.clientX;
            originalStartWeek = task.startWeek;
            originalEndWeek = task.endWeek;
            
            document.addEventListener('mousemove', handleResize);
            document.addEventListener('mouseup', stopResize);
            
            document.body.style.cursor = resizeType === 'left' ? 'w-resize' : 'e-resize';
        });
    });
    
    function handleResize(e) {
        if (!isResizing) return;
        
        const deltaX = e.clientX - startX;
        const currentWeekWidth = weekWidth * currentZoom;
        const deltaWeeks = Math.round(deltaX / currentWeekWidth);
        
        if (resizeType === 'left') {
            const newStartWeek = Math.max(1, Math.min(originalEndWeek, originalStartWeek + deltaWeeks));
            task.startWeek = newStartWeek;
        } else {
            const newEndWeek = Math.max(originalStartWeek, Math.min(15, originalEndWeek + deltaWeeks));
            task.endWeek = newEndWeek;
        }
        
        // Update task bar visually
        updateTaskBarPosition(task);
    }
    
    function stopResize() {
        if (!isResizing) return;
        
        isResizing = false;
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', stopResize);
        document.body.style.cursor = 'default';
        
        // Check for conflicts and regenerate if needed
        handleTaskConflicts(task);
        generateGanttBody();
        addDropZones();
        
        const duration = task.endWeek - task.startWeek + 1;
        showMessage(`${task.name} süresi ${duration} hafta olarak güncellendi`, 'success');
    }
}

function updateTaskBarPosition(task) {
    const taskBar = document.querySelector(`[data-task-id="${task.id}"]`);
    if (!taskBar) return;
    
    const duration = task.endWeek - task.startWeek + 1;
    const currentWeekWidth = weekWidth * currentZoom;
    const startPosition = (task.startWeek - 1) * currentWeekWidth + 1; // +1px border adjustment
    const width = duration * currentWeekWidth - 2; // -2px for better visual spacing
    
    taskBar.style.left = `${startPosition}px`;
    taskBar.style.width = `${width}px`;
}

// Conflict handling and auto-adjustment
function handleTaskConflicts(movedTask) {
    const samePhaseTests = currentTasks.filter(task => 
        task.id !== movedTask.id && task.phase === movedTask.phase
    ).sort((a, b) => a.startWeek - b.startWeek);
    
    let adjustedTasks = [];
    
    // Check for overlaps and cascade adjustments
    samePhaseTests.forEach(task => {
        if (tasksOverlap(movedTask, task)) {
            const taskDuration = task.endWeek - task.startWeek;
            
            // If task starts before moved task ends, push it after
            if (task.startWeek < movedTask.endWeek) {
                task.startWeek = movedTask.endWeek + 1;
                task.endWeek = task.startWeek + taskDuration;
                
                // Check if it fits within timeline
                if (task.endWeek > 15) {
                    // Try to place before moved task
                    const newEndWeek = movedTask.startWeek - 1;
                    if (newEndWeek - taskDuration >= 1) {
                        task.endWeek = newEndWeek;
                        task.startWeek = task.endWeek - taskDuration;
                        showMessage(`${task.name} takvim sınırı nedeniyle hafta ${task.startWeek}'e kaydırıldı`, 'info');
                    } else {
                        // Compress task if needed
                        task.endWeek = 15;
                        task.startWeek = Math.max(1, movedTask.endWeek + 1);
                        showMessage(`${task.name} sıkıştırıldı: ${task.startWeek}-${task.endWeek}`, 'info');
                    }
                } else {
                    adjustedTasks.push(task.name);
                }
            }
        }
    });
    
    // Cascade adjustments for subsequent conflicts
    cascadeTaskAdjustments(samePhaseTests);
    
    if (adjustedTasks.length > 0) {
        showMessage(`Kaydırılan görevler: ${adjustedTasks.join(', ')}`, 'info');
    }
}

function tasksOverlap(task1, task2) {
    return !(task1.endWeek < task2.startWeek || task1.startWeek > task2.endWeek);
}

function cascadeTaskAdjustments(tasks) {
    // Sort tasks by start week
    tasks.sort((a, b) => a.startWeek - b.startWeek);
    
    for (let i = 0; i < tasks.length - 1; i++) {
        const currentTask = tasks[i];
        const nextTask = tasks[i + 1];
        
        if (tasksOverlap(currentTask, nextTask)) {
            const nextTaskDuration = nextTask.endWeek - nextTask.startWeek;
            nextTask.startWeek = currentTask.endWeek + 1;
            nextTask.endWeek = nextTask.startWeek + nextTaskDuration;
            
            // Check bounds
            if (nextTask.endWeek > 15) {
                nextTask.endWeek = 15;
                nextTask.startWeek = Math.max(1, nextTask.endWeek - nextTaskDuration);
            }
        }
    }
}

// Smart auto-scheduling for entire phase
function autoSchedulePhase(phaseNumber) {
    const phaseTasks = currentTasks.filter(task => task.phase === phaseNumber)
        .sort((a, b) => a.id - b.id); // Keep original order
    
    let currentWeek = 1;
    
    phaseTasks.forEach(task => {
        const duration = task.endWeek - task.startWeek;
        task.startWeek = currentWeek;
        task.endWeek = currentWeek + duration;
        currentWeek = task.endWeek + 1; // Leave 1 week gap
        
        // Adjust if exceeds timeline
        if (task.endWeek > 15) {
            task.endWeek = 15;
            task.startWeek = Math.max(1, task.endWeek - duration);
        }
    });
    
    generateGanttBody();
    addDropZones();
    showMessage(`Bölüm ${phaseNumber} otomatik olarak yeniden planlandı`, 'success');
}

function updateCurrentWeek() {
    const currentDate = new Date();
    const weekColumns = document.querySelectorAll('.week-column');
    
    weekColumns.forEach((column, index) => {
        const weekStart = new Date(projectStartDate);
        weekStart.setDate(projectStartDate.getDate() + index * 7);
        
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        
        column.classList.remove('current-week');
        if (currentDate >= weekStart && currentDate <= weekEnd) {
            column.classList.add('current-week');
        }
    });
}

function selectTask(taskId) {
    // Remove previous selection
    document.querySelectorAll('.task-row').forEach(row => {
        row.classList.remove('selected');
    });
    
    // Select new task
    const taskRow = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskRow) {
        taskRow.classList.add('selected');
        selectedTaskId = taskId;
        updateNotesPanel(taskId);
    }
}

function updateNotesPanel(taskId) {
    const task = currentTasks.find(t => t.id === taskId);
    if (!task) return;
    
    const notesContent = document.querySelector('.notes-content');
    notesContent.innerHTML = `
        <h4>${task.name}</h4>
        <p><strong>Açıklama:</strong> ${task.description}</p>
        <p><strong>Faz:</strong> Bölüm ${task.phase}: ${phaseNames[task.phase]}</p>
        <p><strong>Durum:</strong> ${getStatusText(task.status)}</p>
        <p><strong>İlerleme:</strong> ${task.progress}%</p>
        <p><strong>Öncelik:</strong> ${getPriorityText(task.priority)}</p>
        <div style="margin-top: 15px;">
            <strong>Notlar:</strong>
            <div style="margin-top: 5px; padding: 10px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #2196F3;">
                ${task.notes || 'Henüz not eklenmemiş.'}
            </div>
        </div>
        <button onclick="editTask(${taskId})" class="btn btn-primary" style="margin-top: 15px;">
            Görevi Düzenle
        </button>
    `;
}

function editTask(taskId) {
    const task = currentTasks.find(t => t.id === taskId);
    if (!task) return;
    
    currentEditingTaskId = taskId;
    
    // Fill modal with task data
    document.getElementById('taskName').value = task.name;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskStatus').value = task.status;
    document.getElementById('taskPriority').value = task.priority;
    document.getElementById('taskProgress').value = task.progress;
    document.getElementById('progressValue').textContent = `${task.progress}%`;
    document.getElementById('taskNotes').value = task.notes || '';
    document.getElementById('taskPhase').value = task.phase;
    
    // Set dates
    const startDate = new Date(projectStartDate);
    startDate.setDate(projectStartDate.getDate() + (task.startWeek - 1) * 7);
    document.getElementById('startDate').value = formatDateForInput(startDate);
    
    const endDate = new Date(projectStartDate);
    endDate.setDate(projectStartDate.getDate() + (task.endWeek - 1) * 7 + 6);
    document.getElementById('endDate').value = formatDateForInput(endDate);
    
    // Show modal
    document.getElementById('taskModal').style.display = 'block';
    document.body.classList.add('modal-open');
}

function initializeEventListeners() {
    // Modal controls
    const modal = document.getElementById('taskModal');
    const closeButtons = document.querySelectorAll('.close, .close-modal');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            currentEditingTaskId = null;
        });
    });
    
    // Click outside modal to close
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            currentEditingTaskId = null;
        }
    });
    
    // Progress range input
    document.getElementById('taskProgress').addEventListener('input', (e) => {
        const progress = parseInt(e.target.value);
        document.getElementById('progressValue').textContent = `${progress}%`;
        
        // Only auto-update status for logical progress values, preserve manual status selection
        const statusSelect = document.getElementById('taskStatus');
        const currentStatus = statusSelect.value;
        
        // Only override status in specific cases
        if (progress === 0 && currentStatus !== 'delayed' && currentStatus !== 'critical') {
            statusSelect.value = 'not-started';
        } else if (progress === 100 && currentStatus !== 'delayed' && currentStatus !== 'critical') {
            statusSelect.value = 'completed';
        } else if (progress > 0 && progress < 100 && currentStatus === 'not-started') {
            statusSelect.value = 'in-progress';
        }
        
        // Update the task live if editing
        if (currentEditingTaskId) {
            const task = currentTasks.find(t => t.id === currentEditingTaskId);
            if (task) {
                task.progress = progress;
                task.status = statusSelect.value; // Use the selected status, not auto-calculated
                
                // Update the task bar color immediately
                const taskBar = document.querySelector(`[data-task-id="${task.id}"]`);
                if (taskBar) {
                    // Remove all status classes
                    taskBar.classList.remove('not-started', 'in-progress', 'completed', 'delayed', 'critical');
                    // Add new status class
                    taskBar.classList.add(task.status);
                    
                    // Update progress indicator
                    updateProgressIndicator(taskBar, task);
                }
            }
        }
    });
    
    // Status dropdown change
    document.getElementById('taskStatus').addEventListener('change', (e) => {
        // Update the task live if editing
        if (currentEditingTaskId) {
            const task = currentTasks.find(t => t.id === currentEditingTaskId);
            if (task) {
                task.status = e.target.value;
                
                // Update the task bar color immediately
                const taskBar = document.querySelector(`[data-task-id="${task.id}"]`);
                if (taskBar) {
                    // Remove all status classes
                    taskBar.classList.remove('not-started', 'in-progress', 'completed', 'delayed', 'critical');
                    // Add new status class
                    taskBar.classList.add(task.status);
                }
            }
        }
    });
    
    // Save task button
    document.getElementById('saveTask').addEventListener('click', saveTask);
    
    // Delete task button
    document.getElementById('deleteTask').addEventListener('click', () => {
        if (currentEditingTaskId && confirm('Bu görevi silmek istediğinizden emin misiniz?')) {
            deleteTask(currentEditingTaskId);
        }
    });
    
    // Add task button
    document.getElementById('addTask').addEventListener('click', addNewTask);
    
    // Auto schedule button
    document.getElementById('autoSchedule').addEventListener('click', showAutoScheduleModal);
    
    // Save project button
    document.getElementById('saveProject').addEventListener('click', saveProject);
    
    // Export chart button
    document.getElementById('exportChart').addEventListener('click', exportChart);
    
    // Toggle view button
    document.getElementById('toggleView').addEventListener('click', toggleView);
    
    // Zoom controls
    document.getElementById('zoomIn').addEventListener('click', zoomIn);
    document.getElementById('zoomOut').addEventListener('click', zoomOut);
    document.getElementById('zoomReset').addEventListener('click', zoomReset);
}

function saveTask() {
    if (!currentEditingTaskId) return;
    
    const task = currentTasks.find(t => t.id === currentEditingTaskId);
    if (!task) return;
    
    // Update task data
    task.name = document.getElementById('taskName').value;
    task.description = document.getElementById('taskDescription').value;
    task.status = document.getElementById('taskStatus').value;
    task.priority = document.getElementById('taskPriority').value;
    task.progress = parseInt(document.getElementById('taskProgress').value);
    task.notes = document.getElementById('taskNotes').value;
    task.phase = parseInt(document.getElementById('taskPhase').value);
    
    // Status is now managed by the UI, don't auto-update
    
    // Update weeks based on dates
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    task.startWeek = Math.floor((startDate - projectStartDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
    task.endWeek = Math.floor((endDate - projectStartDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
    
    // Clamp to valid range
    task.startWeek = Math.max(1, Math.min(15, task.startWeek));
    task.endWeek = Math.max(1, Math.min(15, task.endWeek));
    
    // Ensure end week is not before start week
    if (task.endWeek < task.startWeek) {
        task.endWeek = task.startWeek;
    }
    
    // Update UI
    generateGanttBody();
    updateProgressStats();
    
    if (selectedTaskId === currentEditingTaskId) {
        updateNotesPanel(currentEditingTaskId);
    }
    
    // Close modal
    document.getElementById('taskModal').style.display = 'none';
    document.body.classList.remove('modal-open');
    currentEditingTaskId = null;
    
    // Show success message
    showMessage('Görev başarıyla güncellendi!', 'success');
}

function deleteTask(taskId) {
    const taskIndex = currentTasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return;
    
    currentTasks.splice(taskIndex, 1);
    
    // Update UI
    generateGanttBody();
    updateProgressStats();
    
    // Clear selection if deleted task was selected
    if (selectedTaskId === taskId) {
        selectedTaskId = null;
        document.querySelector('.notes-content').innerHTML = '<p>Bir görev seçerek notlarını görüntüleyin ve düzenleyin</p>';
    }
    
    // Close modal
    document.getElementById('taskModal').style.display = 'none';
    document.body.classList.remove('modal-open');
    currentEditingTaskId = null;
    
    showMessage('Görev başarıyla silindi!', 'success');
}

function addNewTask() {
    // Show template selection modal
    showTemplateModal();
}

function showTemplateModal() {
    // Create template selection modal
    const templateModal = document.createElement('div');
    templateModal.id = 'templateModal';
    templateModal.className = 'modal';
    templateModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Görev Şablonu Seç</h2>
                <span class="close-template">&times;</span>
            </div>
            <div class="modal-body">
                <div class="template-grid">
                    ${Object.entries(taskTemplates).map(([key, template]) => `
                        <div class="template-card" data-template="${key}">
                            <h3>${template.name}</h3>
                            <p>${template.description}</p>
                            <div class="template-meta">
                                <span class="duration">${template.duration} hafta</span>
                                <span class="priority priority-${template.priority}">${getPriorityText(template.priority)}</span>
                            </div>
                        </div>
                    `).join('')}
                    <div class="template-card custom" data-template="custom">
                        <h3>Özel Görev</h3>
                        <p>Boş görev oluştur</p>
                        <div class="template-meta">
                            <span class="duration">1 hafta</span>
                            <span class="priority priority-medium">Orta</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(templateModal);
    templateModal.style.display = 'block';
    document.body.classList.add('modal-open');
    
    // Event listeners
    templateModal.querySelector('.close-template').addEventListener('click', () => {
        templateModal.remove();
        document.body.classList.remove('modal-open');
    });
    
    templateModal.addEventListener('click', (e) => {
        if (e.target === templateModal) {
            templateModal.remove();
            document.body.classList.remove('modal-open');
        }
    });
    
    // Template selection
    templateModal.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', () => {
            const templateKey = card.dataset.template;
            createTaskFromTemplate(templateKey);
            templateModal.remove();
            document.body.classList.remove('modal-open');
        });
    });
}

function createTaskFromTemplate(templateKey) {
    let template;
    
    if (templateKey === 'custom') {
        template = {
            name: 'Yeni Görev',
            description: 'Görev açıklaması',
            duration: 1,
            priority: 'medium',
            notes: ''
        };
    } else {
        template = taskTemplates[templateKey];
    }
    
    // Find suitable position
    const nextWeek = findNextAvailableWeek();
    
    const newTask = {
        id: Math.max(...currentTasks.map(t => t.id)) + 1,
        name: template.name,
        description: template.description,
        startWeek: nextWeek,
        endWeek: nextWeek + template.duration - 1,
        phase: 1,
        status: 'not-started',
        priority: template.priority,
        progress: 0,
        notes: template.notes
    };
    
    currentTasks.push(newTask);
    generateGanttBody();
    addDropZones();
    updateProgressStats();
    
    // Edit the new task immediately
    setTimeout(() => editTask(newTask.id), 100);
    
    showMessage(`${template.name} şablonundan görev oluşturuldu!`, 'success');
}

function findNextAvailableWeek() {
    // Find the latest end week in any phase
    const latestEndWeek = Math.max(...currentTasks.map(t => t.endWeek), 0);
    return Math.min(15, latestEndWeek + 1);
}

function showAutoScheduleModal() {
    const autoModal = document.createElement('div');
    autoModal.className = 'modal';
    autoModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Otomatik Planlama</h2>
                <span class="close-auto">&times;</span>
            </div>
            <div class="modal-body">
                <p>Hangi bölümü yeniden planlamak istiyorsunuz?</p>
                <div class="phase-selection">
                    ${Object.entries(phaseNames).map(([phase, name]) => `
                        <button class="btn btn-outline phase-btn" data-phase="${phase}">
                            Bölüm ${phase}: ${name}
                        </button>
                    `).join('')}
                    <button class="btn btn-primary phase-btn" data-phase="all">
                        Tüm Projeyi Yeniden Planla
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(autoModal);
    autoModal.style.display = 'block';
    document.body.classList.add('modal-open');
    
    // Event listeners
    autoModal.querySelector('.close-auto').addEventListener('click', () => {
        autoModal.remove();
        document.body.classList.remove('modal-open');
    });
    
    autoModal.addEventListener('click', (e) => {
        if (e.target === autoModal) {
            autoModal.remove();
            document.body.classList.remove('modal-open');
        }
    });
    
    // Phase selection
    autoModal.querySelectorAll('.phase-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const phase = btn.dataset.phase;
            
            if (phase === 'all') {
                autoScheduleAllPhases();
            } else {
                autoSchedulePhase(parseInt(phase));
            }
            
            autoModal.remove();
            document.body.classList.remove('modal-open');
        });
    });
}

function autoScheduleAllPhases() {
    let currentWeek = 1;
    
    // Schedule each phase sequentially
    for (let phase = 1; phase <= 5; phase++) {
        const phaseTasks = currentTasks.filter(task => task.phase === phase)
            .sort((a, b) => a.id - b.id);
        
        phaseTasks.forEach(task => {
            const duration = task.endWeek - task.startWeek;
            task.startWeek = currentWeek;
            task.endWeek = currentWeek + duration;
            currentWeek = task.endWeek + 1;
            
            // Adjust if exceeds timeline
            if (task.endWeek > 15) {
                task.endWeek = 15;
                task.startWeek = Math.max(1, task.endWeek - duration);
            }
        });
    }
    
    generateGanttBody();
    addDropZones();
    showMessage('Tüm proje otomatik olarak yeniden planlandı!', 'success');
}

// Helper function to update task status based on progress
function updateTaskStatusByProgress(task) {
    if (task.progress === 0) {
        task.status = 'not-started';
    } else if (task.progress === 100) {
        task.status = 'completed';
    } else if (task.progress > 0 && task.progress < 100) {
        task.status = 'in-progress';
    }
}

// Helper function to update progress indicator
function updateProgressIndicator(taskBar, task) {
    // Remove existing progress indicator
    const existingIndicator = taskBar.querySelector('div[style*="rgba(255, 255, 255, 0.3)"]');
    if (existingIndicator) {
        existingIndicator.remove();
    }
    
    // Add new progress indicator if progress > 0
    if (task.progress > 0) {
        const progressIndicator = document.createElement('div');
        progressIndicator.style.position = 'absolute';
        progressIndicator.style.left = '0';
        progressIndicator.style.top = '0';
        progressIndicator.style.height = '100%';
        progressIndicator.style.width = `${task.progress}%`;
        progressIndicator.style.background = 'rgba(255, 255, 255, 0.3)';
        progressIndicator.style.borderRadius = '12px';
        progressIndicator.style.pointerEvents = 'none';
        taskBar.appendChild(progressIndicator);
    }
}

// Zoom Functions
function zoomIn() {
    if (currentZoom < 2.0) { // Max 200%
        currentZoom += 0.25;
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > 0.5) { // Min 50%
        currentZoom -= 0.25;
        applyZoom();
    }
}

function zoomReset() {
    currentZoom = 1.0;
    applyZoom();
}

function applyZoom() {
    const currentWeekWidth = weekWidth * currentZoom;
    const totalTimelineWidth = 15 * currentWeekWidth;
    
    // Update zoom level display
    document.getElementById('zoomLevel').textContent = `${Math.round(currentZoom * 100)}%`;
    
    // Update timeline header total width
    const timelineHeader = document.querySelector('.timeline-header');
    if (timelineHeader) {
        timelineHeader.style.minWidth = `${totalTimelineWidth}px`;
        timelineHeader.style.width = `${totalTimelineWidth}px`;
    }
    
    // Update timeline header widths
    const weekHeaders = document.querySelectorAll('.week-header');
    weekHeaders.forEach(header => {
        header.style.width = `${currentWeekWidth}px`;
        header.style.minWidth = `${currentWeekWidth}px`;
    });
    
    // Update week columns
    const weekColumns = document.querySelectorAll('.week-column');
    weekColumns.forEach(column => {
        column.style.width = `${currentWeekWidth}px`;
    });
    
    // Update all task bars
    document.querySelectorAll('.task-bar').forEach(taskBar => {
        const taskId = parseInt(taskBar.dataset.taskId);
        const task = currentTasks.find(t => t.id === taskId);
        if (task) {
            const duration = task.endWeek - task.startWeek + 1;
            const startPosition = (task.startWeek - 1) * currentWeekWidth + 1; // +1px border adjustment
            const width = duration * currentWeekWidth - 2; // -2px for better visual spacing
            
            taskBar.style.left = `${startPosition}px`;
            taskBar.style.width = `${width}px`;
        }
    });
    
    // Update task timeline containers
    const taskTimelines = document.querySelectorAll('.task-timeline');
    taskTimelines.forEach(timeline => {
        timeline.style.minWidth = `${totalTimelineWidth}px`;
        timeline.style.width = `${totalTimelineWidth}px`;
    });
    
    // Update drop zones
    addDropZones();
    
    // Update horizontal scroll container
    const ganttChart = document.querySelector('.gantt-chart');
    const totalChartWidth = totalTimelineWidth + 350; // +350 for task info width
    ganttChart.style.minWidth = `${totalChartWidth}px`;
    ganttChart.style.width = `${totalChartWidth}px`;
    
    // Debug: Console log for checking
    console.log(`Zoom: ${Math.round(currentZoom * 100)}%, Chart Width: ${totalChartWidth}px`);
}

function saveProject() {
    const projectData = {
        name: 'İdari Yönetim Uygulaması - Faz 1',
        startDate: projectStartDate,
        tasks: currentTasks,
        savedAt: new Date()
    };
    
    const dataStr = JSON.stringify(projectData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'idari_yonetim_gantt_chart.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showMessage('Proje başarıyla kaydedildi!', 'success');
}

function exportChart() {
    // Create a simplified version for export
    const chartData = currentTasks.map(task => ({
        'Görev': task.name,
        'Açıklama': task.description,
        'Faz': `Bölüm ${task.phase}: ${phaseNames[task.phase]}`,
        'Başlangıç Haftası': task.startWeek,
        'Bitiş Haftası': task.endWeek,
        'Durum': getStatusText(task.status),
        'Öncelik': getPriorityText(task.priority),
        'İlerleme': `${task.progress}%`,
        'Notlar': task.notes || ''
    }));
    
    const csv = convertToCSV(chartData);
    const dataUri = 'data:text/csv;charset=utf-8,'+ encodeURIComponent(csv);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'idari_yonetim_gantt_chart.csv');
    linkElement.click();
    
    showMessage('Gantt chart başarıyla dışa aktarıldı!', 'success');
}

function convertToCSV(data) {
    if (!data || data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    
    const csvData = data.map(row => {
        return headers.map(header => {
            const value = row[header];
            // Escape commas and quotes in values
            return `"${String(value).replace(/"/g, '""')}"`;
        }).join(',');
    }).join('\n');
    
    return csvHeaders + '\n' + csvData;
}

function toggleView() {
    const ganttContainer = document.querySelector('.gantt-container');
    const button = document.getElementById('toggleView');
    let tableContainer = document.querySelector('.table-container');
    
    if (ganttContainer.style.display === 'none') {
        // Switch to Gantt view
        ganttContainer.style.display = 'block';
        button.textContent = 'Tablo Görünümü';
        if (tableContainer) {
            tableContainer.remove();
        }
    } else {
        // Switch to Table view
        ganttContainer.style.display = 'none';
        button.textContent = 'Gantt Görünümü';
        
        // Remove existing table if it exists
        if (tableContainer) {
            tableContainer.remove();
        }
        
        showTableView();
    }
}

function showTableView() {
    // Create table view (simplified implementation)
    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';
    tableContainer.innerHTML = `
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr style="background: #f8f9fa;">
                    <th style="padding: 12px; border: 1px solid #ddd;">Görev</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Faz</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Durum</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">İlerleme</th>
                    <th style="padding: 12px; border: 1px solid #ddd;">Hafta</th>
                </tr>
            </thead>
            <tbody>
                ${currentTasks.map(task => `
                    <tr>
                        <td style="padding: 12px; border: 1px solid #ddd;">${task.name}</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">Bölüm ${task.phase}</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">
                            <span class="status-indicator ${task.status}"></span>
                            ${getStatusText(task.status)}
                        </td>
                        <td style="padding: 12px; border: 1px solid #ddd;">${task.progress}%</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">${task.startWeek}-${task.endWeek}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
    
    document.querySelector('.gantt-container').after(tableContainer);
}

function updateProgressStats() {
    const totalTasks = currentTasks.length;
    const completedTasks = currentTasks.filter(task => task.status === 'completed').length;
    const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('completedTasks').textContent = completedTasks;
    document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        messageDiv.style.background = '#4CAF50';
    } else if (type === 'error') {
        messageDiv.style.background = '#f44336';
    } else if (type === 'info') {
        messageDiv.style.background = '#2196F3';
    }
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Utility functions
function formatDate(date) {
    return date.toLocaleDateString('tr-TR', { 
        day: '2-digit', 
        month: '2-digit'
    });
}

function formatDateForInput(date) {
    return date.toISOString().split('T')[0];
}

function getStatusText(status) {
    const statusMap = {
        'not-started': 'Başlanmadı',
        'in-progress': 'Devam Ediyor',
        'completed': 'Tamamlandı',
        'delayed': 'Gecikmiş',
        'critical': 'Kritik'
    };
    return statusMap[status] || status;
}

function getPriorityText(priority) {
    const priorityMap = {
        'low': 'Düşük',
        'medium': 'Orta',
        'high': 'Yüksek'
    };
    return priorityMap[priority] || priority;
}

// Auto-save functionality
setInterval(() => {
    localStorage.setItem('ganttChartData', JSON.stringify(currentTasks));
}, 30000); // Save every 30 seconds

// Load saved data on page load
window.addEventListener('load', () => {
    const savedData = localStorage.getItem('ganttChartData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            if (parsedData && parsedData.length > 0) {
                currentTasks = parsedData;
                generateGanttBody();
                updateProgressStats();
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .table-container {
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        margin-top: 20px;
    }
`;
document.head.appendChild(style);