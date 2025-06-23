const BILI_API_URL = 'https://60s-api.viki.moe/v2/bili';
const WEIBO_API_URL = 'https://60s-api.viki.moe/v2/weibo';
const ZHIHU_API_URL = 'https://60s-api.viki.moe/v2/zhihu';
const TOUTIAO_API_URL = 'https://60s-api.viki.moe/v2/toutiao';
const DOUYIN_API_URL = 'https://60s-api.viki.moe/v2/douyin';
const TODAY_SUMMARY_API_URL = 'https://60s-api.viki.moe/v2/60s';
const SHICI_DAILY_API_URL = 'https://www.meiriyiyan.com/api/v1';

export async function fetchBiLiData() {
    const res = await fetch(BILI_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchWeiBoData() {
    const res = await fetch(WEIBO_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchZhiHuData() {
    const res = await fetch(ZHIHU_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchTouTiaoData() {
    const res = await fetch(TOUTIAO_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchDouYinData() {
    const res = await fetch(DOUYIN_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchTodaySummaryData() {
    const res = await fetch(TODAY_SUMMARY_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json.data;
}

export async function fetchShiCiDailyData() {
    const res = await fetch(SHICI_DAILY_API_URL, {cache: 'no-store'});
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        throw new Error("Failed to fetch data");
    }
    return json;
}
