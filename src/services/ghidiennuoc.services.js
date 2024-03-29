import createApiClient from "./api.services.js";

class hoadonService{
    constructor(baseUrl="/api/ghidiennuoc"){
        this.api=createApiClient(baseUrl);
    }
    async layDSDN(maphong){
        return (await this.api.get(`/${maphong}`)).data;
    };
    async layDN(maphong,data){
        return (await this.api.get(`/${maphong}`,data)).data;
    };
    async themDN(data){
        return (await this.api.post(`/`,data)).data;
    };
    async chinhsuaDN(data){
        return (await this.api.put(`/`,data)).data;
    };
    async thongkeDN(nam){
        return (await this.api.get(`/thongke/${nam}`)).data;
    };
   
   
}

export default new hoadonService();