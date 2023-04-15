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
    async themPhong (maloai,data){
        return (await this.api.post(`/${maloai}`,data));
    }
    async xoaPhong (maphong){
        return (await this.api.delete(`/${maphong}`));
    }
}

export default new loaiphongService();