USE [UdemyCourse]
GO
/****** Object:  Table [dbo].[tbl_LoginUsers]    Script Date: 4/14/2019 8:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_LoginUsers](
	[LUserId] [int] NULL,
	[LUserName] [varchar](50) NULL,
	[LUserPass] [varchar](50) NULL,
	[dtEntry] [smalldatetime] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tbl_loginUsersDemo]    Script Date: 4/14/2019 8:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_loginUsersDemo](
	[UserId] [int] NULL,
	[UserName] [varchar](50) NULL,
	[PasswordHash] [varbinary](max) NULL,
	[PasswordSalt] [varbinary](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (1, N'anower', N'Softify@123', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (2, N'jahed', N'DCmde7+l2nNNfGl5+pPRng==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (3, N'kalam', N'WF1PHs8B7RTOD0+8G9X5IA==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (4, N'kaalam', N'pJg/NUKUSgDP7+fT3X8dyw==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (5, N'dfgasd', N'LuXK7heVNMG74IcGRRg9qw==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (6, N'jahanara', N'jH5lmwgue4ANLo1exKexMw==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (7, N'', N'68Qkjr6sElil/objA4Uxrg==', NULL)
INSERT [dbo].[tbl_LoginUsers] ([LUserId], [LUserName], [LUserPass], [dtEntry]) VALUES (8, N'dfg', N'374H6/Q+new7qjS8jluttA==', NULL)
/****** Object:  StoredProcedure [dbo].[prcGetValidateLogin]    Script Date: 4/14/2019 8:24:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[prcGetValidateLogin] @UserName varchar(15)='', @Password varchar(15)=''
as
Begin
	Select LuserId, LuserName, LUserPass  
	from tbl_LoginUsers 
	Where LuserName = @UserName 
End


GO
