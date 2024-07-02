interface ISale {
  saleId: { type: string };
  totalPrice: { type: number };
  buyer: { type: string };
  saleDate: { type: string };
}

export default ISale;
