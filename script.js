const galleryGrid = document.getElementById('gallery-grid');

function uploadImages() {
  const input = document.getElementById('upload');
  const files = Array.from(input.files);

  if (files.length === 0) {
    alert('Please select images to upload.');
    return;
  }

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;

      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      galleryItem.appendChild(img);

      galleryGrid.appendChild(galleryItem);
    };
    reader.readAsDataURL(file);
  });
}
