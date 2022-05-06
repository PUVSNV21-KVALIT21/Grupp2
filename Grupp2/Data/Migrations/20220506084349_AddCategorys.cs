using Microsoft.EntityFrameworkCore.Migrations;
using System.Text;

#nullable disable

namespace Grupp2.Data.Migrations
{
    public partial class AddCategorys : Migration
    {
        const string CATEGORY_NAME_1 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62a1";
        const string CATEGORY_NAME_2 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62b2";
        const string CATEGORY_NAME_3 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62c3";
        const string CATEGORY_NAME_4 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62d4";
        const string CATEGORY_NAME_5 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62e5";
        const string CATEGORY_NAME_6 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62f6";
        const string CATEGORY_NAME_7 = "050b62da-a76f-4fe1-8d0B-d11fe6ce62a7";
        const string CATEGORY_NAME_8 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62a8";
        const string CATEGORY_NAME_9 = "050b62da-a76f-4fe1-8d0b-d11fe6ce62a9";
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_1}', 'Skafferi', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_2}', 'Veganskt', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_3}', 'Drycker', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_4}', 'Storpack', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_5}', 'Bröd, kex & kakor', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_6}', 'Hygien & apotek', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_7}', 'Barn & baby', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_8}', 'Hem & städ', '')");
            migrationBuilder.Sql($"INSERT INTO Categories(Id,Name,ImageLink) VALUES ('{CATEGORY_NAME_9}', 'Ekologisk mat', '')");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_1}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_2}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_3}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_4}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_5}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_6}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_7}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_8}'");
            migrationBuilder.Sql($"DELETE FROM Categories WHERE UserId = '{CATEGORY_NAME_9}'");
        }
    }
}
