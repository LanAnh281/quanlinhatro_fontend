import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/phong"){
        this.api=createApiClient(baseUrl);
    }
    async LayTTP(){
        return (await this.api.get("/")).data;
    }
    async layPhong(maphong){
        return (await this.api.get(`${maphong}`)).data;
    }
    async LayTTPTheoLoai(maloai){
        return (await this.api.get(`/dsphong/${maloai}`)).data;
    }
    async chinhsuaPhong(maphong,data){
        return (await this.api.put(`/${maphong}`,data)).data;
    }
}

export default new loaiphongService();