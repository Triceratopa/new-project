export interface Article {
    id: string,
    title: string,
    publishedAt: string,
    image: string,
    summary: string
}

 export const fetchArticles = async (): Promise<Article[]>=> {
    const res = await fetch (`https://api.spaceflightnewsapi.net/v4/articles`)
    if (!res.ok){
        throw new Error ('Sad')
    }
    const data = await res.json()
    return data.articles
   
 }
 
 
 export const fetchArticlesID = async (id:string): Promise<Article[]>=> {
    const res = await fetch (`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
    if (!res.ok){
        throw new Error ('Sad')
    }
    const data = await res.json()
    return data.article
 }