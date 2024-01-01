const newFormHandler = async function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content,
            }),
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.error('Failed to create a new post.');
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
};

document.getElementById('blog-post-form').addEventListener('submit', newFormHandler);
