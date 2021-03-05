let strength = 100;

const fightComponent = () => {
  $('#fight').html(`<div class="d-flex flex-column my-5 w-25">
                      <button type="button" class="btn btn-warning btn-lg my-3" id="fightRun">Run Away (bravely)</button>
                      <button type="button" class="btn btn-danger btn-lg my-3" id="fightViolence">Commit Violence</button>
                    </div>
                    <h1>Fight</h1>
                    <div class="progress" id="fightProgress"></div>
  `);
};

const fightProgressBar = () => {
  $('#fightProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100">${strength}% strength</div>`,
  );
};

const fightRun = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }

  fightProgressBar();
};

const fightViolence = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }

  fightProgressBar();
};

const startFight = () => {
  fightComponent();
  fightProgressBar();

  $('#fightRun').on('click', fightRun);
  $('#fightViolence').on('click', fightViolence);
};

export default startFight;
