using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2Assignment.Models
{
    public class CalculatorModel
    {
        private const int V = 100;
        [Required]
        [Range(0, V)]
        public string Assignment { get; set; }
        [Required]
        [Range(0, V)]
        public string Group_Project{ get; set; }
        [Required]
        [Range(0, V)]
        public string Quizzes { get; set; }
        [Required]
        [Range(0, V)]
        public string Exams { get; set; }
        [Required]
        [Range(0, V)]
        public string Intex { get; set; }

    }
}
