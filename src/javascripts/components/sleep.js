let energy = 50;

const sleepComponent = () => {
  $('#sleep').html(`<div class="d-flex flex-column my-5 w-25 float-right fill">
                      <button type="button" class="btn btn-success btn-lg my-3" id="sleepNap">Nap</button>
                      <button type="button" class="btn btn-primary btn-lg my-3" id="sleepSlumber">Deep Slumber</button>
                    </div>
                    <h1>Sleep</h1>
                    <div class="progress" id="sleepProgress"></div>
  `);
};

const sleepProgressBar = () => {
  $('#sleepProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${energy}%" aria-valuenow="${energy}" aria-valuemin="0" aria-valuemax="100">${energy}% Energy</div>`,
  );
};

const sleepNap = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }

  sleepProgressBar();
};

const sleepSlumber = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }

  sleepProgressBar();
};

const startSleep = () => {
  sleepComponent();
  sleepProgressBar();

  $('#sleepNap').on('click', sleepNap);
  $('#sleepSlumber').on('click', sleepSlumber);
};

export default startSleep;
