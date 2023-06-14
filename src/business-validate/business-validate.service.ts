import { Injectable } from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";

@Injectable()
export class BusinessValidateService {
    constructor(private readonly httpService: HttpService) {}
    private authKey = '1Kiyi4iHiDcFiIdSy3xPMlIqcweHYEaJfw1P7te70HZHvlJ8f0kQ7N8EqgqO83sWD7DEkDu%2BtXxLeMkIy3%2BPNQ%3D%3D';
    private baseURL = 'https://api.odcloud.kr/api/nts-businessman/v1/';

    async isValidBusiness(id: number): Promise<Observable<AxiosResponse<any>>> {
        const headers = { headers: { 'Content-Type': 'application/json' } };
        const body = { "businesses": [{
            "b_no" : `"${id}"`,
            "start_dt": "20000101",
            "p_nm": "김성희",
            "p_nm2": "",
            "b_nm": "(주)테스트",
            "corp_no": "0000000000000",
            "b_sector": "",
            "b_type": "",
            "b_adr": "" }]}
        return this.httpService.post(this.baseURL + 'validate/?serviceKey=' + this.authKey, body, headers);
    }
}
