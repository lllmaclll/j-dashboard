export interface GoldPrice {
    gold: {
      buy: string;
      sell: string;
    };
    gold_bar: {
      buy: string;
      sell: string;
    };
    change: {
      compare_previous: string;
      compare_yesterday: string;
    };
  }
  
  export interface GoldResponse {
    status: string;
    response: {
      date: string;
      update_time: string;
      price: GoldPrice;
    };
  }