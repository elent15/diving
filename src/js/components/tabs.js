// tabs
const tabs = () => {
  const tabs = Array.from(document.querySelectorAll('.tabs'));

  let btnActive;
  let tabActive;

  tabs.forEach(tabs => {
    if (tabs) {
      tabs.addEventListener('click', (e) => {
        const tabsData = e.target.dataset.tab;

        if (tabsData) {
          const tabsBtn = Array.from(tabs.querySelectorAll('.tabs__btn'));
          const parent = e.target.closest('.tabs-block');
          const tabsContent = Array.from(parent.querySelectorAll('.tab'));

          btnActive = 'tours__btn--active';
          tabActive = 'tours__tab--active';

          tabsBtn.forEach(btn => {
            btn.classList.remove(btnActive);
          });

          tabs.querySelector(`[data-tab='${tabsData}']`).classList.add(btnActive);

          tabsContent.forEach(tab => {
            tab.classList.remove(tabActive);
          });

          document.getElementById(`${tabsData}`).classList.add(tabActive);
        }
      });
    }
  });

}

tabs();
