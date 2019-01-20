<?php

use Illuminate\Database\Seeder;

class CompetitorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $MAX = 6;
        $competitor_name =  ['นาย จันทร์ ทองดีกว่า', 'นาย จันทร์ ทองดีกว่าที่สุด', 'นายอังคาร ทองดีกว่าที่สุด', 'นาย พุธ ทองดีกว่าที่สุด', 'name5', 'name6'];
        $university = ['บางมด', 'พระนครเหนือ', 'ลาดกระบัง', 'บางมด', 'พระนครเหนือ', 'ลาดกระบัง'];
        for($i = 0 ; $i < $MAX ; $i++){
            DB::table('Competitor')->insert([
                'name' => $competitor_name[$i],
                'university' => $university[$i]
            ]);
        }
    }
}
