<?php

namespace App\Http\Controllers;

use App\TaxiTimeline;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaxiTimelineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $timelineFullData = TaxiTimeline::where('user_id', $user->id)->orderBy('id', 'desc')->first();
        $timeline = explode(",", $timelineFullData->timeline);
        array_shift($timeline);
        return response($timeline);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response("stored");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->timeline;
        $timeline = $request->user()->taxiTimelines()->create([
            'timeline' => implode($data),
        ]);

        return response($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TaxiTimeline  $taxiTimeline
     * @return \Illuminate\Http\Response
     */
    public function show(TaxiTimeline $taxiTimeline)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TaxiTimeline  $taxiTimeline
     * @return \Illuminate\Http\Response
     */
    public function edit(TaxiTimeline $taxiTimeline)
    {
        return response("stored");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TaxiTimeline  $taxiTimeline
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TaxiTimeline $taxiTimeline)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TaxiTimeline  $taxiTimeline
     * @return \Illuminate\Http\Response
     */
    public function destroy(TaxiTimeline $taxiTimeline)
    {
        //
    }
}
