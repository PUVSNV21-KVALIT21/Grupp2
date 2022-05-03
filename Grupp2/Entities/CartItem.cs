namespace Grupp2.Entities
{
    public class CartItem
    {
        public Guid Id { get; set; }
        public int Quantity { get; set; }
        public int TotalPrice { get; set; }
        public Product Product { get; set; }
    }
}
