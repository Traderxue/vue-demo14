import http from "@/http/http.js"

export const getPrice = (type) =>{
    return http({
        url:`/api/v5/public/mark-price?instType=SWAP&instId=${type}-USD-SWAP`,
    })
}