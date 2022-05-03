using System.ComponentModel.DataAnnotations;

namespace Grupp2.Entities
{
    public class Discount
    {
        public Guid Id { get; set; }
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Name must be greater then or equal to 2")]
        public string? Name { get; set; }
        [Required]
        [MaxLength(50)]
        public int DiscountValue { get; set; }
    }
}
