let fun = 50;

const playComponent = () => {
  $('#play').html(`<h1>Play</h1>
                  <div class="progress" id="playProgress"></div>
                  <div class="d-flex flex-column my-5 w-25 float-right">
                    <button type="button" class="btn btn-primary btn-lg my-3" id="playSuper">Super Fun Activity</button>
                    <button type="button" class="btn btn-success btn-lg my-3" id="playSlightly">Slightly Fun Activity</button>
                  </div>
  `);
};

const playProgressBar = () => {
  $('#playProgress').html(
    `<div class="progress-bar" role="progressbar" style="width: ${fun}%" aria-valuenow="${fun}" aria-valuemin="0" aria-valuemax="100">${fun}% Fun</div>`,
  );
};

const playSuper = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }

  playProgressBar();
};

const playSlightly = () => {
  fun += 4;
  if (fun > 100) {
    fun = 100;
  }

  playProgressBar();
};

const startPlay = () => {
  playComponent();
  playProgressBar();

  $('#playSuper').on('click', playSuper);
  $('#playSlightly').on('click', playSlightly);
};

export default startPlay;
