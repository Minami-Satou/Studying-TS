// (1)インターフェースの定義と利用
// TypeScriptで以下の要件を満たすインターフェース Book を定義してください。

// Book インターフェースは、次のプロパティを持ちます:
// title: string型
// author: string型
// pages: number型
// published: Date型
interface Book {

}


// また、定義した Book インターフェースを利用して、以下の本の情報を持つオブジェクトを作成してください。
const book:  = {
    title: "The Great Gatsby",
    : "F. Scott Fitzgerald",
    : 180,
    : new Date(1925, 3, 10)
};

// ===============================================================================
// ===============================================================================


// (2)タイプエイリアスの定義と利用
// TypeScriptで以下の要件を満たすタイプエイリアス Employee を定義してください。

// Employee タイプエイリアスは、次のプロパティを持ちます:
// name: string型
// age: number型
// position: string型

type Employee = {

}

// また、定義した Employee タイプエイリアスを利用して、以下の従業員の情報を持つ employeeオブジェクトを作成してください。
const employee: Employee = {
    name: "Alice",
    age: 30,
    position: "Software Engineer"
};


// ===============================================================================
// ===============================================================================

// (3)インターフェースの継承と実装
// TypeScriptで以下の要件を満たすインターフェースを定義してください。

// Shape インターフェースは、次のプロパティを持ちます:
// name: string型 (図形の名前)
// area(): number型を返す関数
interface  :{

}


// また、Shape インターフェースを実装するクラス Circle を定義してください。Circle クラスは、次の要件を満たす必要があります:

// コンストラクタで radius (number型) を受け取り、内部で保持します。
// name プロパティは固定値 "Circle" を持ちます。
// area() メソッドは、円の面積を計算して返します (π * radius^2)。

class Circle implements Shape {
    name:  = "Circle";
    radius: ;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI *  ** 2;
    }
}

const myCircle = new Circle(5);
console.log(myCircle.area()); // 円の面積を計算して出力