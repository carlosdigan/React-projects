import * as cheerio from 'cheerio';
import fetch from "isomorphic-fetch"
import { v4 } from 'uuid';


async function getHTML(category_id, page_number, sort_by) {
    const url = `/games?cat=${category_id}&sort_by=${sort_by}&page=${page_number}`;
    console.log(url);
    let response = await fetch(url);
    let html = await response.text();
    return html
}

function getGames(html) {
    const $ = cheerio.load(html);
    const games = $(".item");
    const games_info = []
    games.each((index_, el) => {
        const title = $(el).find(".name").text();
        const price = parseFloat($(el).attr("data-price"));
        const img_url = $(el).find(".cover").children("img").attr("data-src");
        const game = {id: v4(), title, price, img_url}
        games_info.push(game);
    })
    return games_info;
}

export default async function getCategory(category_id, page_number, sort_by) {
    const pageHTML = await getHTML(category_id, page_number, sort_by);
    const games = await getGames(pageHTML);
    return games;
}




