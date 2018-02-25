const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // this is being updated
    const suffix = this.dataset.sizing || '';
    console.log(this.value);
    console.log(suffix);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
