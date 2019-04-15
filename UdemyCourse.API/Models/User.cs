namespace UdemyCourse.API.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Data;

    public class User
    {
        public int UserId { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="You must specify password between 4 and 8")]
        public string UserPassword { get; set; }
        public string DisplayName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public void prcSetData(DataRow dr)
        {
            UserId = Int32.Parse(dr["LUserId"].ToString());
            UserName = dr["LUserName"].ToString();
            UserPassword = dr["LUserPass"].ToString();
        }
    }
}