const rangeSlider = document.querySelector('.scale');
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: 40,
    connect: 'lower',
    step: 192,
    range: {
      'min': 0,
      'max': 768
    }
  });
}
