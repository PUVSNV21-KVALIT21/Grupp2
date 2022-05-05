using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Grupp2.Data.Migrations
{
    public partial class AddIsNewsProductInProduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsNewsProduct",
                table: "Products",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsNewsProduct",
                table: "Products");
        }
    }
}
