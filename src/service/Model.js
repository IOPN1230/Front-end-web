class _DataFactory {
    object(name,date,author,price,heatSign,influenceRadius,image) {
        return {
            name: name,
            date: date,
            author: author,
            price: price,
            heatSign: heatSign,
            influenceRadius: influenceRadius,
            image:image
        };
    }
}
export const DataFactory = new _DataFactory()