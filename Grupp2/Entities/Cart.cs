

namespace Grupp2.Entities
{
    public class Cart
    {
        public Guid Id { get; set; }
        public List<CartItem>? CartItems { get; set; }
    }
}
