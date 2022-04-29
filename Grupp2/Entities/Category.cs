﻿using System.ComponentModel.DataAnnotations;

namespace Grupp2.Entities
{
    public class Category
    {
        public Guid Id { get; set; }   
        [Required]
        [StringLength(250, MinimumLength = 2, ErrorMessage = "Name must be greater then or equal to 2")]
        public string? Name { get; set; }
    }
}
