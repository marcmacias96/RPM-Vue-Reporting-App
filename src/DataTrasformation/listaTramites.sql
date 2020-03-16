CREATE OR REPLACE VIEW "public"."listaTramites" AS 
 SELECT tramite."DscaTipoTramite" AS label,
    tramite."Codigo" AS value
   FROM "TipoTramite" tramite;