let lastSong = false;
/**
 * @param {array} fileName fileName must to be fileName without extension.
 * @param {bool} loop loop is an optional parameter. If you want to play queue reversed you can set it true.
 * @param {string} sourceUrl sourceUrl is an optional parameter. If you wanna use external url you can set sth. like 'https:example.com/'. It's default is main dir of website ('/).
 */
const play = async (fileName,loop=false,sourceUrl = "/")=>{
    let audio = new Audio(`${sourceUrl}${fileName}`);
    audio.loop=loop;
    audio.play();
    return audio;
}
/**
 * @param {array} queue queue must to be array of audio urls.
 * @param {bool} reversed reversed is an optional parameter. If you want to play queue reversed you can set it true.
 * @param {string} sourceUrl sourceUrl is an optional parameter. If you wanna use external url you can set sth. like 'https:example.com/'. It's default is main dir of website ('/).
 */
const audioQueue = async (queue,reversed=false,sourceUrl='/')=>{
    //if you dont' want to delete original array must to use like this.
    //i guess this method called as pass by value
    queue = [...queue];
    if(!reversed){
        queue = queue.reverse();
    }
    if(queue.length != 0){
        let lastIdx = queue.length - 1;
        let music = queue[lastIdx]
        if(lastSong != false){
            lastSong.addEventListener("ended", async() => {
                lastSong = await play(music,false,sourceUrl);
                queue.pop();
                audioQueue(queue,true,sourceUrl);
            });
        }
        else{
            lastSong = await play(music,false,sourceUrl);
            queue.pop();
            audioQueue(queueue,true,sourceUrl);
        }
    }
    else{
        lastSong = false;
    }
    
}
export {audioQueue,play};