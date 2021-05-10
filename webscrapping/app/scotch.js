import Cheerio from "cheerio";

export const gethtmldata = html =>{
    let data = [];
    const $  = Cheerio.load(html);
    $("div.last_episodes ul.items li").each((i,elem)=>{
        data.push({
            imageUrl: $(elem).find('a img').attr("src"),
            link:`https://www1.gogoanime.ai${$(elem).find('a').attr("href")}`,
            title:$(elem).find('a').attr("title")
        })
    });
    return data;
}

