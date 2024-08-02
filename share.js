function shareLink(url) {
    if (navigator.share) {
        navigator.share({
            title: 'successfully',
            url: url
        }).then(() => {
            console.log('Successful share');
        }).catch((error) => {
            console.log('Error sharing', error);
        });
    } else {
        alert('successfully');
    }
}