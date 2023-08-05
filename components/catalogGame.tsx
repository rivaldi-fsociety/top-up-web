import React from "react";
import { GamesProps } from '@/utils/types'
import CardGame from "./cardGame";

export default function CatalogGame({props, propsFilter}: {props : GamesProps, propsFilter: number}) {
	return (
		<>
            {(propsFilter == props.category_id) ?
                <CardGame props={props}/> 
                : 
                (propsFilter == 1 && props.is_default == true) ?
                    <CardGame props={props}/> 
                    : 
                    ""
            }
		</>
	);
}
