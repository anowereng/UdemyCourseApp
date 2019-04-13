using System;
using System.Threading.Tasks;
using Sampan;
using UdemyCourse.API.Models;
using System.Data;
using System.Collections.Generic;
using System.Collections;
namespace UdemyCourse.API.Data
{
    public class LoginQuery
    {

        public bool UserExists(string username)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();
            var Query = "SELECT  cast(Isnull(MAX(LUserId),0) AS float)  AS UserId FROM tbl_loginUsers where Lusername='" + username + "'";
            var variable = CoreSQL.CoreSQL_GetDoubleData(Query);
            try
            {
                if (variable > 0) return true; else return false;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            finally
            {
            }
        }
        public string CreateUser(User model)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();
            var Query = "SELECT  cast(Isnull(MAX(LUserId),0) + 1 AS float)  AS UserId FROM tbl_loginUsers";
            var variable = CoreSQL.CoreSQL_GetDoubleData(Query);
            try
            {
                var sqlQuery = "Insert Into tbl_loginUsers (LUserId, LUserName, LUserPass)" +
                               " Values ('" + variable + "','" + model.UserName + "','" + CoreSQL.GetEncryptedData(model.UserPassword) + "')";
                arrayList.Add(sqlQuery);
                CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
                return "Successfully Save.";
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            finally
            {
            }
        }
    }
    
}