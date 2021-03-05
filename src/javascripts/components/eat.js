let full = 100;

const eatComponent = () => {
  $('#eat').html(`<h1>Eat</h1>
                  <div class="progress" id="eatProgress"></div>
                  <div class="d-flex flex-column my-5 w-25">
                    <button type="button" class="btn btn-success btn-lg my-3" id="eatHealthy">Eat Healthy Food</button>
                    <button type="button" class="btn btn-warning btn-lg my-3" id="eatJunk">Eat Junk Food</button>
                  </div>
  `);
};

const eatProgressBar = () => {
  $('#eatProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${full}%" aria-valuenow="${full}" aria-valuemin="0" aria-valuemax="100">${full}% Full</div>`,
  );
};

const eatHealthy = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }

  eatProgressBar();
};

const eatJunk = () => {
  full -= 4;
  if (full < 0) {
    full = 0;
  }

  eatProgressBar();
};

const startEat = () => {
  eatComponent();
  eatProgressBar();

  $('#eatHealthy').on('click', eatHealthy);
  $('#eatJunk').on('click', eatJunk);
};

export default startEat;
