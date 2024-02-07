// tabs
const tabs = () => {
  const tabs = Array.from(document.querySelectorAll('.tabs'));

  tabs.forEach(tabs => {
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        setTimeout(scroll, 500);
        const tabsData = e.target.dataset.tab;

        if (tabsData) {
          const tabsBtn = Array.from(tabs.querySelectorAll('.tabs__btn'));
          const parent = e.target.closest('.tabs-block');
          const tabsContent = Array.from(parent.children);

          tabsBtn.forEach(btn => {
            btn.classList.remove('tabs__btn--active');
          });

          tabs.querySelector(`[data-tab='${tabsData}']`).classList.add('tabs__btn--active');

          tabsContent.forEach(tab => {
            tab.classList.remove('tab--active');
          });

          document.getElementById(`${tabsData}`).classList.add('tab--active');
        }
      });
    }
  });

}

tabs();
