using System.ComponentModel.DataAnnotations;

namespace Grupp2.Entities
{
    public class Product
    {
        public Guid Id { get; set; }   
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Name must be greater then or equal to 2")]
        public string Name { get; set; }
        [Required]
        [MaxLength(50)]
        public int Price { get; set; }  
        [Required]
        [StringLength(250, MinimumLength = 2, ErrorMessage = "String must be greater then or equal to 2")]
        public string Description { get; set; }
        public Category Category { get; set; }
        public Discount? Discount { get; set; }
    }
}
