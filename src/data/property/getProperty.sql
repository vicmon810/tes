SELECT [property_ID],
        [strees],
        [city],
        [country],
        [date_build],
        [current_owner],
        [price]
From [dbo].[property]
WHERE [property_ID] = @property_ID
ORDER BY [date_build]


