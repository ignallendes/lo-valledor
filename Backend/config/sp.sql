USE [lo-valledor]; 
GO

CREATE PROCEDURE sp_ObtenerProductosPorCategoria
    @CategoriaId INT
AS
BEGIN
    SET NOCOUNT ON;

    -- Consulta de ejemplo
    SELECT 
        1 AS Id, 'Manzanas' AS Nombre, 1200 AS Precio, @CategoriaId AS CategoriaId
    UNION ALL
    SELECT 
        2 AS Id, 'Plátanos' AS Nombre, 800 AS Precio, @CategoriaId AS CategoriaId;
END;
GO