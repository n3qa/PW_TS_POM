import { test, expect, Request } from "@playwright/test";
//IMPORT 
import APISKcookies from "../tests/Lidl/common/apisupport/apiSKcookies";
// END OF IMPTS 
export class APIsupport { 

  private readonly request:Request;
  private readonly apiSKcookies: APISKcookies;
  
  constructor(request:Request){
    this.request = request;
    
    //this.apiSKcookies = new APISKcookies(this.request)
  }

  //Instance providers
   apiSupportSKcookies() {return this.apiSKcookies};
   
}