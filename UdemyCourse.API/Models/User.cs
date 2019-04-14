namespace UdemyCourse.API.Models
{
    using System;
    using System.Data;

    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
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