import Cheerio from "cheerio";

export const gethtmldata = html =>{
    let data = [];
    const $  = Cheerio.load(html);
    $("div#recent-episodes-carousel div.card").each((i,elem)=>{
        data.push({
            imageUrl: $(elem).find('img').attr("data-src"),
            link:`${$(elem).find('a').attr("href")}`,
            title:$(elem).find('h6').attr("title"),
            type:$(elem).find('small span:nth-child(1)').html(),
            language:$(elem).find('small span:nth-child(2) span:nth-child(1)').html(),
        })
    });
    return data;
}

