export const fetchDetails = ()=>{
    const date = new Date();

    const day = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

    fetch(`https://api.jikan.moe/v3/schedule/${day[date.getDay()]}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }
    )
        .then(response => response.json())
        .then(data => {
            return data[day[date.getDay()]];
        })
        .catch(err => {
            console.log(err);
        })
    return 0;
}