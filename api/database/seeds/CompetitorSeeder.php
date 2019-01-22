<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CompetitorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('Competitor')->insert([
            [
            'name' => 'นายพิรุฬห์ลักษณ์ มโนรัตน์',
            'nickname' => 'พีรณัฐ',
            'university' => "พระนครเหนือ",
            'like' => "0",
            'share' => "0"
            ],
            [
            'name' => 'นางสาวชนิตา ศิลานฤธานนท์',
            'nickname' => 'พีช',
            'university' => "พระนครเหนือ",
            'like' => "0",
            'share' => "0"
            ],
            [
            'name' => 'นายสิรภพ รักเกื้อ',
            'nickname' => 'เจ',
            'university' => "ลาดกระบัง",
            'like' => "0",
            'share' => "0"
            ],
            [
            'name' => 'นาวสาวเบญจพร เงินศรีตระกูล',
            'nickname' => 'เม',
            'university' => "ลาดกระบัง",
            'like' => "0",
            'share' => "0"
            ],
            [
            'name' => 'นางสาวเกวลิน อินทรกำแหง',
            'nickname' => 'เกรซ',
            'university' => "บางมด",
            'like' => "0",
            'share' => "0"
            ],
            [
            'name' => 'นายจักราช นิลละออ ',
            'nickname' => 'เจมส์',
            'university' => "บางมด",
            'like' => "0",
            'share' => "0"
            ]              
        ]);

    }
}
