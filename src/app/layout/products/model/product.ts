export class Product {
    id: number;
    sku: string;
    name: string;
    price: number;
    expiredDate: string= '48h';
    composition: string;
    produceCompany: string = '佛山市楷博食品有限公司';
    companyMobile: string = '4000-5566-08';
    companyCode: string = 'JY24406060163781';
    produceAddress: string = '佛山市顺德区乐从镇腾兴路A76-78';
    produceDate: string;
    labelCount: number;

    pageIndex: number;
    pageSize: number;
}
