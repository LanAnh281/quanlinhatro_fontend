import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/phong"){
        this.api=createApiClient(baseUrl);
    }
    async LayTTP(){
        return (await this.api.get("/")).data;
    }

    async LayTTPTheoLoai(maloai){
        return (await this.api.get(`${maloai}`)).data;
    }
}

export default new loaiphongService();