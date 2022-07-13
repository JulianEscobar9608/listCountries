
export class Counter{

    static r1 = 0;
    static r2 = 8;

    static subsCounter(){
        if(this.r1 != 0 && this.r1 != 4){
            this.r1 -= 9;
            this.r2 -= 9; 
        }
    }

    static addCounter(){
        this.r1 += 9;
        this.r2 += 9; 
    }



}