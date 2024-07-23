document.addEventListener('DOMContentLoaded', function() 
{
    const images = document.querySelectorAll('.image');

    images.forEach(image => 
        {
        image.addEventListener('click', function() 
        {
            images.forEach(img => 
                {
                if (img !== image) 
                    {
                    img.style.display = 'none';
                }
            });
        });
    });
});
