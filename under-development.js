// Dynamic custom modal pop-up for under-development apps
document.addEventListener('click', function(event) {
    const targetLink = event.target.closest('a');
    
    if (targetLink && targetLink.getAttribute('href') === '#U_D') {
        event.preventDefault();
        
        let modal = document.getElementById('customDevModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'customDevModal';
            modal.className = 'fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all';
            modal.innerHTML = `
                <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-sm w-full relative shadow-2xl text-center">
                    <div class="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-2xl mx-auto flex items-center justify-center text-xl mb-3">🚧</div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Under Development</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-xs mb-6">This app is currently being built and isn't available for download yet. Check back soon!</p>
                    <button id="closeDevModal" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition shadow-lg">Got It</button>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('closeDevModal').addEventListener('click', () => {
                modal.classList.add('hidden');
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        } else {
            modal.classList.remove('hidden');
        }
    }
});
